# Generated by Django 2.0.2 on 2018-03-18 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resources', '0004_auto_20180318_1434'),
    ]

    operations = [
        migrations.AlterField(
            model_name='featuredprojectsgallary',
            name='subheading',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
