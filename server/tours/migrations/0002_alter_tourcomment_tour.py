# Generated by Django 5.0.3 on 2024-03-23 18:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tours', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tourcomment',
            name='tour',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='tours.tour'),
        ),
    ]
