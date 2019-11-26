<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Service\ApiService;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\DriverManager;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Resort;

class ApiController extends AbstractController
{
    /**
     * @Route("/api/get-countries", name="get_countries")
     */
    public function getCountries()
    {   
        $sql = " 
        SELECT DISTINCT country from booking_crm.resort
        ";

        $em = $this->getDoctrine()->getManager();
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();

        return $this->json([
            'data' => $stmt
        ]);
    }

    /**
     * @Route("/api/get-locations", name="get_locations")
     */
    public function getLocations()
    {   
        $request = Request::createFromGlobals();
        $country = $request->get('country');

        $sql = " 
        SELECT DISTINCT city FROM booking_crm.resort WHERE country='$country'
        ";

        $em = $this->getDoctrine()->getManager();
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();

        return $this->json([
            'data' => $stmt
        ]);
    }

    /**
     * @Route("/api/get-hotel-names", name="get_hotel_names")
     */
    public function getHotelNames()
    {   
        $request = Request::createFromGlobals();
        $city = $request->get('city');

        $sql = " 
        SELECT DISTINCT resort_name FROM booking_crm.resort WHERE city='$city'
        ";

        $em = $this->getDoctrine()->getManager();
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();

        return $this->json([
            'data' => $stmt
        ]);
    }

    /**
     * @Route("/api/hotel-name", name="hotel_name")
     */
    public function getHotelInfo()
    {   
        $request = Request::createFromGlobals();
        $city = $request->get('city');

        $sql = " 
        SELECT resort_name FROM booking_crm.resort WHERE city='$city'
        ";

        $em = $this->getDoctrine()->getManager();
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();

        return $this->json([
            'data' => $stmt
        ]);
    }

    /**
     * @Route("/api/hotel-info", name="hotel_info")
     */
    public function getHotel()
    {   
        $request = Request::createFromGlobals();
        $resortName = $request->get('resortName');

        $sql = " 
        SELECT * FROM booking_crm.resort WHERE resort_name='$resortName'
        ";

        $em = $this->getDoctrine()->getManager();
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();

        return $this->json([
            'data' => $stmt
        ]);
    }

    /**
     * @Route("/api/get-availability", name="get_availability")
     */
    public function getAvailability()
    {   

        $request = Request::createFromGlobals();
        $roomId = $request->get('roomId');;
        $dateFrom = $request->get('dateFrom');;
        $dateTo = $request->get('dateTo');;

        $sql = " 
        SELECT * FROM booking_crm.rooms WHERE room_id=$roomId AND date_available BETWEEN '$dateFrom' AND '$dateTo'
        ";

        $em = $this->getDoctrine()->getManager();
        $stmt = $em->getConnection()->prepare($sql);
        $stmt->execute();

        return $this->json([
            'data' => $stmt
        ]);
    }




}
