# Generated by Django 2.0.2 on 2018-04-06 12:18

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0019_delete_filter'),
        ('service', '0005_serviceindexitems'),
    ]

    operations = [
        migrations.CreateModel(
            name='ServicePageItems',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('heading1', models.CharField(blank=True, max_length=255)),
                ('heading1_intro', wagtail.core.fields.RichTextField(blank=True)),
                ('heading2', models.CharField(blank=True, max_length=255)),
                ('heading2_intro', wagtail.core.fields.RichTextField(blank=True)),
            ],
            options={
                'abstract': False,
                'ordering': ['sort_order'],
            },
        ),
        migrations.CreateModel(
            name='ServicePageMobilityIndustry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('heading', models.CharField(blank=True, max_length=255)),
                ('intro', wagtail.core.fields.RichTextField(blank=True)),
                ('embed_url', models.URLField(blank=True, verbose_name='Embed URL')),
            ],
            options={
                'abstract': False,
                'ordering': ['sort_order'],
            },
        ),
        migrations.CreateModel(
            name='ServicePageResources',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('heading', models.CharField(blank=True, max_length=255)),
                ('embed_url', models.URLField(blank=True, verbose_name='Embed URL')),
                ('image', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image')),
            ],
            options={
                'abstract': False,
                'ordering': ['sort_order'],
            },
        ),
        migrations.CreateModel(
            name='ServicePageSolutions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('header', models.CharField(blank=True, max_length=255)),
                ('header_intro', wagtail.core.fields.RichTextField(blank=True)),
                ('embed_url', models.URLField(blank=True, verbose_name='Embed URL')),
                ('image', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image')),
            ],
            options={
                'abstract': False,
                'ordering': ['sort_order'],
            },
        ),
        migrations.AddField(
            model_name='servicepage',
            name='page_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='servicepagesolutions',
            name='page',
            field=modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='service_page_solutions', to='service.ServicePage'),
        ),
        migrations.AddField(
            model_name='servicepageresources',
            name='page',
            field=modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='service_page_resources', to='service.ServicePage'),
        ),
        migrations.AddField(
            model_name='servicepagemobilityindustry',
            name='page',
            field=modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='service_page_mobility_industry', to='service.ServicePage'),
        ),
        migrations.AddField(
            model_name='servicepageitems',
            name='page',
            field=modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='service_page_items', to='service.ServicePage'),
        ),
    ]