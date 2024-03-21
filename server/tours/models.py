from django.db import models
import datetime


class BusTourType(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class Tour(models.Model):
    name = models.CharField(max_length=100, unique=True, blank=False)
    tour_bus_type = models.ForeignKey(BusTourType, on_delete=models.CASCADE)
    date = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.name
