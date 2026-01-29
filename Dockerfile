# Use a lightweight Nginx Alpine image
FROM nginx:alpine

# Copy the pre-built static files from the local dist folder to the container
COPY dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]