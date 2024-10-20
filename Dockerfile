# Stage 1: Build the React app
FROM node:14 AS build

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사 및 설치
COPY package*.json ./
RUN npm install

# React 애플리케이션 코드 복사 및 빌드
COPY . .
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:latest

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# React 빌드 파일 복사
COPY --from=build /app/build /usr/share/nginx/html

# Nginx의 80 포트를 호스트의 25252 포트로 매핑
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]