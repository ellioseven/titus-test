#!/usr/bin/env bash

chmod 755 sites/default
chmod 755 sites/default/settings.php
drush site-install \
    --db-url=sqlite://sites/default/files/.ht.sqlite \
    --account-pass=password \
    titus_test