# Generated by Django 3.1.2 on 2020-11-02 03:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tests', '0004_auto_20200921_2005'),
        ('plans', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='plan',
            name='tests',
            field=models.ManyToManyField(to='tests.Test'),
        ),
    ]
