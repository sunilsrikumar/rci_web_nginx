# Generated by Django 2.0.2 on 2018-05-01 06:47

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0012_auto_20180428_0016'),
    ]

    operations = [
        migrations.CreateModel(
            name='ServicePageNav',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('nav_title', models.CharField(blank=True, max_length=255)),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='service_page_navigation', to='service.ServicePage')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
    ]
