# Generated by Django 5.0.3 on 2024-04-09 12:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tours', '0007_tourimglist_tour_img_list'),
    ]

    operations = [
        migrations.AddField(
            model_name='tour',
            name='preview_img',
            field=models.ImageField(default='', upload_to='uploads/tours/previews'),
        ),
    ]