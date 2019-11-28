import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import moment from "moment"
import Grid from "@material-ui/core/Grid";

import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            focusedInput: null,
            isRetrieved: false,
            isHotelInfoRetrieved: false,
            selectedCountry: '',
            selectedLocation: '',
            selectedResortName: '',
            date: moment(),
            selectedRoomId: '',
            startDate: moment(),
            endDate: moment().add(7, 'days'),
            dateFormat: 'MM/DD/YYYY',
            countries: [],
            locations: [],
            hotelNames: [],
            hotelInfo: [],
            bookingInfo: []
        }
    }
    handleDatesChange = ({ startDate, endDate }) => {
        console.log('Handle dates change: ', startDate, endDate)
        this.setState({ startDate, endDate });
    }

    handleFocusChange = (focusedInput) => {
        console.log('Focused input', focusedInput)
        this.setState({ focusedInput });
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
                dateFrom: this.state.startDate.toISOString().split('T')[0],
                dateTo: this.state.endDate.toISOString().split('T')[0]
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

    dateChanged = (d) =>{
        this.setState({date: d});
    }


    componentDidMount() {
        this.handleRetrieveCountries();
        // this.handleRetrieveLocationsBasedOnCountry();
        // this.handleRetrieveHotelNamesBasedOnLocation();
        // this.handleRetrieveHotelInfoBasedOnHotelName();
        // this.handleRetrieveAvailableBooking();
    }


    render() {
        return(
            <div className="mt-lg-5 ml-lg-5 mr-lg-5">
                <Grid item xs>
                    <h1 className="display-2 text-center mb-xl-5">Travel Idea Booking</h1>
                </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <InputLabel id="demo-simple-select-label">Alegeti tara</InputLabel>
                            <Select
                                className="d-flex justify-content-center align-items-center"
                                labelId="demo-mutiple-name-label"
                                id="selectedCountry"
                                name="selectedCountry"
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
                        </Grid>
                        <Grid item xs>
                            <InputLabel id="demo-simple-select-label" >Alegeti locatia</InputLabel>
                            <Select
                                className="d-flex justify-content-center align-items-center"
                                labelId="demo-mutiple-name-label"
                                id="selectedLocation"
                                name="selectedLocation"
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
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <InputLabel id="demo-simple-select-label">Alegeti resortul</InputLabel>
                            <Select
                                className="d-flex justify-content-center align-items-center"
                                id="selectedResortName"
                                name="selectedResortName"
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
                        </Grid>
                        <Grid item xs={3}>
                            <DateRangePicker
                                className="d-flex justify-content-center align-items-center col-xs-4 mt-3"
                                startDate={this.state.startDate}
                                startDateId="selectedDateFrom"
                                endDate={this.state.endDate}
                                endDateId="selectedDateTo"
                                displayFormat={this.state.dateFormat}
                                onDatesChange={this.handleDatesChange}
                                focusedInput={this.state.focusedInput}
                                onFocusChange={this.handleFocusChange}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="outlined" color="primary"
                                    className="d-flex justify-content-center align-items-center col-xs-4 mt-2"
                                    onClick={this.handleRetrieveAvailableBooking}>
                                Cauta oferte
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={12}>
                        <Grid item xs={12}>
                            {
                                this.state.isHotelInfoRetrieved ?
                                    <table className="table table-striped ml-sm-1 mr-sm-1">
                                        <thead>
                                        <tr>
                                            <th>Tara</th>
                                            <th>Locatie</th>
                                            <th>Nume Resort</th>
                                            <th>Descriere</th>
                                            <th>Stele</th>
                                            <th>Pagina contact</th>
                                        </tr>
                                        </thead>
                                        {
                                            this.state.hotelInfo.map(data => {
                                                return(
                                                    <tbody>
                                                    <tr>
                                                        <td>{data.country}</td>
                                                        <td>{data.city}</td>
                                                        <td>{data.resort_name}</td>
                                                        <td>{data.description}</td>
                                                        <td>{data.stars}</td>
                                                        <td>{data.url}</td>
                                                    </tr>
                                                    </tbody>
                                                )
                                            })
                                        }
                                    </table>
                                    :
                                    ""
                            }
                        </Grid>
                        <Grid item xs={12}>
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
                        </Grid>
                    </Grid>





                        {/*<div className="col-sm-2">*/}
                        {/*    <button className="btn btn-primary" type="submit"*/}
                        {/*            onClick={this.handleRetrieveAvailableBooking}>*/}
                        {/*        Booking*/}
                        {/*    </button>*/}
                        {/*</div>*/}

            {/*    <div className="row">*/}
            {/*        <div className="col-sm-6">*/}
            {/*            <div className="form-group">*/}
            {/*                <select className="form-control" name="selectedCountry"*/}
            {/*                        onChange={this.handleCountriesSelectChange}>*/}
            {/*                    <option value="" selected disabled hidden>Alegeti tara</option>*/}
            {/*                    {*/}
            {/*                        this.state.countries.map(data => {*/}
            {/*                            return(*/}
            {/*                                <option value={data}*/}
            {/*                                        key={data}>*/}
            {/*                                    {data}*/}
            {/*                                </option>*/}
            {/*                            )*/}
            {/*                        })*/}
            {/*                    }*/}
            {/*                </select>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="col-sm-6">*/}
            {/*            <div className="form-group">*/}
            {/*                <select className="form-control" name="selectedLocation"*/}
            {/*                        onChange={this.handleLocationSelectChange}>*/}
            {/*                    <option value="" selected disabled hidden>Alegeti locatia</option>*/}
            {/*                    {*/}
            {/*                        this.state.locations.map(data => {*/}
            {/*                            return(*/}
            {/*                                <option value={data}*/}
            {/*                                        key={data}>*/}
            {/*                                    {data}*/}
            {/*                                </option>*/}
            {/*                            )*/}
            {/*                        })*/}
            {/*                    }*/}
            {/*                </select>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="row">*/}
            {/*        <div className="col-sm-6">*/}
            {/*            <div className="form-group">*/}
            {/*                <select className="form-control" name="selectedResortName"*/}
            {/*                        onChange={this.handleResortNameSelectChange}>*/}
            {/*                    <option value="" selected disabled hidden>Alegeti resortul TEST</option>*/}

            {/*                    {*/}
            {/*                        this.state.hotelNames.map(data => {*/}
            {/*                            return(*/}
            {/*                                <option value={data}*/}
            {/*                                        key={data}>*/}
            {/*                                    {data}*/}
            {/*                                </option>*/}
            {/*                            )*/}
            {/*                        })*/}
            {/*                    }*/}
            {/*                </select>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        </div>*/}
            {/*        <div className="col-sm-2">*/}
            {/*            <button className="btn btn-primary" type="submit"*/}
            {/*                    onClick={this.handleRetrieveAvailableBooking}>*/}
            {/*                Booking*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    <div className="row">*/}
            {/*        {*/}
            {/*            this.state.isHotelInfoRetrieved ?*/}
            {/*                <table className="table table-striped ml-sm-1 mr-sm-1">*/}
            {/*                    <thead>*/}
            {/*                    <tr>*/}
            {/*                        <th className="h4">Tara</th>*/}
            {/*                        <th className="h4">Locatie</th>*/}
            {/*                        <th className="h4">Nume Resort</th>*/}
            {/*                        <th className="h4">Descriere</th>*/}
            {/*                        <th className="h4">Stele</th>*/}
            {/*                        <th className="h4">Pagina contact</th>*/}
            {/*                    </tr>*/}
            {/*                    </thead>*/}
            {/*                    {*/}
            {/*                        this.state.hotelInfo.map(data => {*/}
            {/*                            return(*/}
            {/*                                <tbody>*/}
            {/*                                <tr>*/}
            {/*                                    <td className="h5">{data.country}</td>*/}
            {/*                                    <td className="h5">{data.city}</td>*/}
            {/*                                    <td className="h5">{data.resort_name}</td>*/}
            {/*                                    <td className="h5">{data.description}</td>*/}
            {/*                                    <td className="h5">{data.stars}</td>*/}
            {/*                                    <td className="h5">{data.url}</td>*/}
            {/*                                </tr>*/}
            {/*                                </tbody>*/}
            {/*                            )*/}
            {/*                        })*/}
            {/*                    }*/}
            {/*                </table>*/}
            {/*                :*/}
            {/*                ""*/}
            {/*        }*/}
            {/*    </div>*/}
            {/*    <div className="row">*/}
            {/*        {*/}
            {/*            this.state.isRetrieved ?*/}
            {/*                <table className="table table-striped ml-sm-1 mr-sm-1">*/}
            {/*                    <thead>*/}
            {/*                    <tr>*/}
            {/*                        <th>Camera</th>*/}
            {/*                        <th>Descriere</th>*/}
            {/*                        <th>Marime</th>*/}
            {/*                        <th>Mese incluse</th>*/}
            {/*                        <th>Extra</th>*/}
            {/*                        <th>Pret</th>*/}
            {/*                    </tr>*/}
            {/*                    </thead>*/}
            {/*                    {*/}
            {/*                        this.state.bookingInfo.map(data => {*/}
            {/*                            return(*/}
            {/*                                    <tbody>*/}
            {/*                                    <tr>*/}
            {/*                                        <td>{data.room_name}</td>*/}
            {/*                                        <td>{data.description}</td>*/}
            {/*                                        <td>{data.room_size}</td>*/}
            {/*                                        <td>{data.meals}</td>*/}
            {/*                                        <td>{data.extras}</td>*/}
            {/*                                        <td>{data.price}</td>*/}
            {/*                                    </tr>*/}
            {/*                                    </tbody>*/}
            {/*                            )*/}
            {/*                        })*/}
            {/*                    }*/}
            {/*                </table>*/}
            {/*                :*/}
            {/*                ""*/}
            {/*        }*/}
            {/*    </div>*/}
            </div>
            )
    }
}

ReactDOM.render(<App />, document.getElementById('booking-react'));
