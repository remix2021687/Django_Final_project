# Generated by Django 5.0.3 on 2024-04-01 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tours', '0005_alter_tourreview_rate'),
    ]

    operations = [
        migrations.CreateModel(
            name='TourTags',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='tour',
            name='description',
            field=models.TextField(default='', max_length=5000),
        ),
        migrations.AddField(
            model_name='tour',
            name='tour_tags',
            field=models.ManyToManyField(to='tours.tourtags'),
        ),
    ]