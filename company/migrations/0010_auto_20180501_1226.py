# Generated by Django 2.0.2 on 2018-05-01 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0009_job_responsibilities'),
    ]

    operations = [
        migrations.AlterField(
            model_name='careerblock',
            name='block_intro',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='careeropeningpage',
            name='intro',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='careerworkculture',
            name='block_intro',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='companycareerspage',
            name='career_intro',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='testimonial',
            name='intro',
            field=models.TextField(blank=True, null=True),
        ),
    ]