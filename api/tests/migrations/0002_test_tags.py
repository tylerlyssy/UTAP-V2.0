# Generated by Django 3.1 on 2020-08-11 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tags', '0001_initial'),
        ('tests', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='test',
            name='tags',
            field=models.ManyToManyField(to='tags.Tag'),
        ),
    ]
