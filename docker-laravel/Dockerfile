# Set master image
FROM php:7.2-fpm-alpine

# Set working directory
WORKDIR /var/www/html

# Install PHP Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy existing application directory
COPY . .

# Trong cấu hình của php:7.2-fpm-alpine đã có lệnh sau:
# EXPOSE 9000
# CMD ["php-fpm"]
# vì thế ta không cần CMD

# EXPOSE <port> -> lệnh này sẽ export port ra để container khác có thể gọi đến đc, chứ môi trường ngoài không
# gọi đến được nhé, muốn môi trường ngoài gọi đến là port mapping.

# docker build -t laravel-project:v1 .

