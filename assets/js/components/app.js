import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isRetrieved: false,
            isHotelInfoRetrieved: false,
            selectedCountry: '',
            selectedLocation: '',
            selectedResortName: '',
            selectedRoomId: '',
            selectedDateFrom: new Date(),
            selectedDateTo: new Date(),
            countries: [],
            locations: [],
            hotelNames: [],
            hotelInfo: [],
            bookingInfo: []
        }
    }

    handleRetrieveCountries = () => {
        Axios.get('/api/get-countries'
        ).then(res =>{
            let retrievedCountries = res.data.data.map(data =>
                data.country
            );
            this.setState({
                countries: retrievedCountries,
                selectedCountry: retrievedCountries[0]
            }, () =>{
                // this.handleRetrieveLocationsBasedOnCountry()
                this.state.countries.map(data =>{
                    console.log("Iterating countries", data)
                })
            });
            console.log('Retrieved countries: ', retrievedCountries)
        }).catch(err =>{
            console.log('Can not retrieve data from API: ', err)
        })
    };

    handleRetrieveLocationsBasedOnCountry = () => {
        Axios.get('/api/get-locations', {
            params: {
                country: this.state.selectedCountry
            }
        }).then(res =>{
            let retrievedLocations = res.data.data.map(data =>
                data.city
            );
            this.setState({
                locations: retrievedLocations
            }, () => {
                // this.handleRetrieveHotelNamesBasedOnLocation();
            });
            console.log('Retrieved locations: ', retrievedLocations)
        }).catch(err => {
            console.log(err)
        })
    };

    handleRetrieveHotelNamesBasedOnLocation = () => {
        Axios.get('/api/hotel-name', {
            params: {
                city: this.state.selectedLocation
            }
        }).then(res => {
            let retrievedHotelNames = res.data.data.map(data =>
                data.resort_name
            );
            this.setState({
                hotelNames: retrievedHotelNames
            });
            console.log('Hotel names: ', retrievedHotelNames)
        }).catch(err => {
            console.log(err)
        })
    };

    handleRetrieveHotelInfoBasedOnHotelName = () => {
        Axios.get('/api/hotel-info', {
            params: {
                resortName: this.state.selectedResortName
            }
        }).then(res => {
            let hotelInfo = res.data.data.map(data =>
                data
            );
            let selectedHotelId = res.data.data.map(data =>
                data.room_id
            )
            this.setState({
                isHotelInfoRetrieved: true,
                hotelInfo: hotelInfo,
                selectedRoomId: selectedHotelId[0]
            });
            console.log('Hotel info:', hotelInfo)
            console.log('Hotel info:', selectedHotelId[0])

        }).catch(err => {
            console.log(err);
        })
    };

    handleRetrieveAvailableBooking = () => {
        Axios.get('/api/get-availability', {
            params: {
                roomId: this.state.selectedRoomId,
                dateFrom: this.state.selectedDateFrom.toISOString().split('T')[0],
                dateTo: this.state.selectedDateTo.toISOString().split('T')[0]
            }
        }).then(res => {
            let bookingInfo = res.data.data.map(data =>
                data
            );
            this.setState({
                isRetrieved: true,
                bookingInfo: bookingInfo
            });
            console.log('Booking info: ', bookingInfo)
        }).catch(err => {
            console.log(err)
        })
    };

    handleCountriesSelectChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.handleRetrieveLocationsBasedOnCountry();
        })
    };

    handleLocationSelectChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.handleRetrieveHotelNamesBasedOnLocation();
        })
    };

    handleResortNameSelectChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.handleRetrieveHotelInfoBasedOnHotelName();
        })
    };

    handleStartDateOnChange = date => {
        this.setState({
            selectedDateFrom: date
        }, () => {
            console.log('Start date: ', this.state.selectedDateFrom.toISOString().split('T')[0])
        })
    }

    handleEndDateOnChange = date => {
        this.setState({
            selectedDateTo: date
        }, () => {
            console.log('End date: ', this.state.selectedDateTo.toISOString().split('T')[0])
        })
    };


     componentDidMount() {
        this.handleRetrieveCountries();
        // this.handleRetrieveLocationsBasedOnCountry();
        // this.handleRetrieveHotelNamesBasedOnLocation();
        // this.handleRetrieveHotelInfoBasedOnHotelName();
        // this.handleRetrieveAvailableBooking();
    }

    render() {
        return(
            <div className="col-lg-12">
                <div className="col-md-12 border-primary mb-md-5">
                    <h1 className="display-2 text-center">Travel Idea Booking</h1>
                </div>


                <div className="col-sm-12">
                    <InputLabel id="demo-simple-select-label" className="col-md-6">Alegeti tara</InputLabel>
                    <Select
                        className="col-sm-3"
                        labelId="demo-mutiple-name-label"
                        id="demo-mutiple-name"
                        onChange={this.handleCountriesSelectChange}
                        input={<Input/>}>
                        {
                            this.state.countries.map(data => {
                                return (
                                    <MenuItem value={data}
                                              key={data}>
                                        {data}
                                    </MenuItem>
                                )
                            })
                        }
                    </Select>
                </div>

                <div className="col-sm-12">
                    <InputLabel id="demo-simple-select-label" className="col-md-6">Alegeti locatia</InputLabel>
                    <Select
                        className="col-sm-3"
                        labelId="demo-mutiple-name-label"
                        id="demo-mutiple-name"
                        onChange={this.handleLocationSelectChange}
                        input={<Input/>}>
                        {
                            this.state.locations.map(data => {
                                return (
                                    <MenuItem value={data}
                                              key={data}>
                                        {data}
                                    </MenuItem>
                                )
                            })
                        }
                    </Select>
                </div>

                <div className="col-sm-12">
                    <InputLabel id="demo-simple-select-label" className="col-md-6">Alegeti resortul</InputLabel>
                    <Select
                        className="col-sm-3"
                        labelId="demo-mutiple-name-label"
                        id="demo-mutiple-name"
                        onChange={this.handleResortNameSelectChange}
                        input={<Input/>}>
                        {
                            this.state.hotelNames.map(data => {
                                return (
                                    <MenuItem value={data}
                                              key={data}>
                                        {data}
                                    </MenuItem>
                                )
                            })
                        }
                    </Select>
                </div>


                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <select className="form-control" name="selectedCountry"
                                    onChange={this.handleCountriesSelectChange}>
                                <option value="" selected disabled hidden>Alegeti tara</option>
                                {
                                    this.state.countries.map(data => {
                                        return(
                                            <option value={data}
                                                    key={data}>
                                                {data}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <select className="form-control" name="selectedLocation"
                                    onChange={this.handleLocationSelectChange}>
                                <option value="" selected disabled hidden>Alegeti locatia</option>
                                {
                                    this.state.locations.map(data => {
                                        return(
                                            <option value={data}
                                                    key={data}>
                                                {data}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <select className="form-control" name="selectedResortName"
                                    onChange={this.handleResortNameSelectChange}>
                                <option value="" selected disabled hidden>Alegeti resortul TEST</option>

                                {
                                    this.state.hotelNames.map(data => {
                                        return(
                                            <option value={data}
                                                    key={data}>
                                                {data}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                        <div className="col-sm-3">
                            {
                                <DatePicker
                                    selected={this.state.selectedDateFrom}
                                    onChange={this.handleStartDateOnChange}
                                />
                            }
                        </div>
                        <div className="col-sm-3">
                            {
                                <DatePicker
                                    selected={this.state.selectedDateTo}
                                    onChange={this.handleEndDateOnChange}
                                />
                            }
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-primary" type="submit"
                                onClick={this.handleRetrieveAvailableBooking}>
                            Booking
                        </button>
                    </div>
                <div className="row">
                    {
                        this.state.isHotelInfoRetrieved ?
                            <table className="table table-striped ml-sm-1 mr-sm-1">
                                <thead>
                                <tr>
                                    <th className="h4">Tara</th>
                                    <th className="h4">Locatie</th>
                                    <th className="h4">Nume Resort</th>
                                    <th className="h4">Descriere</th>
                                    <th className="h4">Stele</th>
                                    <th className="h4">Pagina contact</th>
                                </tr>
                                </thead>
                                {
                                    this.state.hotelInfo.map(data => {
                                        return(
                                            <tbody>
                                            <tr>
                                                <td className="h5">{data.country}</td>
                                                <td className="h5">{data.city}</td>
                                                <td className="h5">{data.resort_name}</td>
                                                <td className="h5">{data.description}</td>
                                                <td className="h5">{data.stars}</td>
                                                <td className="h5">{data.url}</td>
                                            </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                            :
                            ""
                    }
                </div>
                <div className="row">
                    {
                        this.state.isRetrieved ?
                            <table className="table table-striped ml-sm-1 mr-sm-1">
                                <thead>
                                <tr>
                                    <th>Camera</th>
                                    <th>Descriere</th>
                                    <th>Marime</th>
                                    <th>Mese incluse</th>
                                    <th>Extra</th>
                                    <th>Pret</th>
                                </tr>
                                </thead>
                                {
                                    this.state.bookingInfo.map(data => {
                                        return(
                                                <tbody>
                                                <tr>
                                                    <td>{data.room_name}</td>
                                                    <td>{data.description}</td>
                                                    <td>{data.room_size}</td>
                                                    <td>{data.meals}</td>
                                                    <td>{data.extras}</td>
                                                    <td>{data.price}</td>
                                                </tr>
                                                </tbody>
                                        )
                                    })
                                }
                            </table>
                            :
                            ""
                    }
                </div>
            </div>
            )
    }
}

ReactDOM.render(<App />, document.getElementById('booking-react'));