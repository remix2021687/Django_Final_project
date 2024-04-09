from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import User
import datetime


class BusTourType(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class TourTags(models.Model):
    name = models.CharField(max_length=50, blank=False, null=False)

    def __str__(self):
        return self.name


class TourImgList(models.Model):
    name_img = models.CharField(max_length=100, blank=False, null=False)
    img_url = models.ImageField(upload_to='uploads/tours', blank=False)

    def __str__(self):
        return self.name_img


class Tour(models.Model):
    name = models.CharField(max_length=100, unique=True, blank=False)
    tour_bus_type = models.ForeignKey(BusTourType, on_delete=models.DO_NOTHING)
    tour_tags = models.ManyToManyField(TourTags)
    preview_img = models.ImageField(default='', upload_to='uploads/tours/previews', blank=False)
    img_list = models.ManyToManyField(TourImgList)
    description = models.TextField(default='', max_length=5000, blank=False, null=False)
    date = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.name


class TourReview(models.Model):
    tours = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='reviews')
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    rate = models.IntegerField(default=0, blank=False, null=False, validators=[
        MaxValueValidator(5),
        MinValueValidator(1),
    ])
    text = models.TextField(max_length=500)
    date = models.DateField(default=datetime.date.today)

    class Meta:
        ordering = ['-date']

    def __str__(self):
        return f'Comments on {self.tours} created {self.date}'
