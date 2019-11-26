<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use App\Entity\Resort;

class ApiService
{
    public function getResortCountries()
    {
        $conn = $this->getEntityManager()
            ->getConnection();

        $query = 'SELECT country from booking_crm.resort';
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        return $stmt->fetchAll();
    }
}