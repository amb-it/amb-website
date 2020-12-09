FROM php:7.4-fpm

RUN apt-get update

RUN apt-get install -y \
    libwebp-dev \
    libjpeg62-turbo-dev \
    libpng-dev libxpm-dev \
    libfreetype6-dev \
    zlib1g-dev \
    libzip-dev \
    sendmail

# email config
RUN echo "sendmail_path=/usr/sbin/sendmail -t -i" >> /usr/local/etc/php/conf.d/sendmail.ini
RUN sed -i '/#!\/bin\/sh/aservice sendmail restart' /usr/local/bin/docker-php-entrypoint
RUN sed -i '/#!\/bin\/sh/aecho "$(hostname -i)\t$(hostname) $(hostname).localhost" >> /etc/hosts' /usr/local/bin/docker-php-entrypoint

RUN docker-php-ext-configure gd --with-freetype
RUN docker-php-ext-install gd

# And clean up the image
RUN rm -rf /var/lib/apt/lists/*

CMD ["php-fpm"]

EXPOSE 9000