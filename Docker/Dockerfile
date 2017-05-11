FROM ubuntu:16.04
MAINTAINER Salvatore Cordiano <docker@parallel.it>, Guido Pili <guido.pili@hotmail.it>
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y nodejs npm git vim nano
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install -g create-react-app

RUN apt-get install -y zsh
RUN git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh \
      && cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc \
      && chsh -s /bin/zsh
