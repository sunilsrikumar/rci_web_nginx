# Generated by Django 2.0.2 on 2018-05-01 04:17

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0007_auto_20180501_0925'),
    ]

    operations = [
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('job_title', models.CharField(blank=True, max_length=255)),
                ('job_sub_title', models.CharField(blank=True, max_length=255)),
                ('experience', models.CharField(blank=True, max_length=255)),
                ('description', models.TextField(blank=True, max_length=255)),
                ('requirements', models.TextField(blank=True, max_length=255)),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='job', to='company.CareerOpeningPage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
    ]