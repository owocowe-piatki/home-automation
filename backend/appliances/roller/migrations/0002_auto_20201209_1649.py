# Generated by Django 3.1.4 on 2020-12-09 15:49

import django_fsm
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("roller", "0001_initial"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="roller",
            name="open",
        ),
        migrations.AddField(
            model_name="roller",
            name="state",
            field=django_fsm.FSMField(default="closed", max_length=50, protected=True),
        ),
    ]
