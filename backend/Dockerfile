FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install pdo pdo_mysql zip

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY . .

ENV COMPOSER_ALLOW_SUPERUSER=1
RUN composer install

#CMD ["php-fpm"]

RUN apt-get update && apt-get install -y git zsh;
RUN chsh -s $(which zsh);
RUN sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" \
    -t ys \
    -p 'history-substring-search' \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions;
RUN git config --global --add oh-my-zsh.hide-dirty 1;

RUN curl -sS https://get.symfony.com/cli/installer | bash
#RUN cp /root/.symfony5/bin/symfony /usr/local/bin/symfony

COPY profile_bash  /
RUN cat /profile_bash >> ~/.bashrc;
RUN cat /profile_bash >> ~/.zshrc;

ENTRYPOINT ["/root/.symfony5/bin/symfony", "--allow-http", "--port=8080",  "local:server:start"]

