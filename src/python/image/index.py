# -*- coding:utf-8 -*-

import pytesseract
from PIL import Image

imagePath = "./image.jpg"
txtPath = "./image.txt"

image = Image.open(imagePath)
code = pytesseract.image_to_string(image, lang="chi_sim")

fo = open(txtPath, "w")
fo.write(code)

fo.close()
