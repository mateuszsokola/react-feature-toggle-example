FROM nginx 

COPY container /
COPY build /usr/share/nginx/html

ENV FEATURE_TREASURY_CHART "false"

CMD /bin/bash -c "envsubst '\$FEATURE_TREASURY_CHART' < /etc/nginx/nginx.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"