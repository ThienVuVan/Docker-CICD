FROM python:3.6-alpine
WORKDIR /app
# Tạo ra biến môi trường tên là PORT với giá trị 5555
# ENV PORT 5555
COPY . .
RUN pip install -r requirements.txt
CMD ["python", "app.py"]

# lưu ý, đối với flask, mặc chỉ chấp được truy cập trong phạm vi localhost, tức là trong container
# còn từ môi trường ngoài gọi vào thì không còn là từ localhost của container nữa
# nên cần vào app, chỉnh như sau:
#     if __name__ == "__main__":
#     app.run()
#     =>
#     if __name__ == "__main__":
#     app.run(host="0.0.0.0")
# chỉnh như trên tức là chấp nhận mọi ip truy cập
# chú ý: project Nuxt cũng bị tương tự.