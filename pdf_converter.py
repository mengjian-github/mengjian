import fitz
import os

def convert_pdf_to_markdown(pdf_path, output_dir):
    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)
    
    # 打开PDF文件
    doc = fitz.open(pdf_path)
    
    # 准备markdown文件
    md_path = os.path.join(output_dir, 'output.md')
    img_dir = os.path.join(output_dir, 'images')
    os.makedirs(img_dir, exist_ok=True)
    
    with open(md_path, 'w', encoding='utf-8') as md_file:
        # 遍历每一页
        for page_num in range(len(doc)):
            page = doc[page_num]
            
            # 提取文本
            text = page.get_text()
            md_file.write(f'\n\n## Page {page_num + 1}\n\n{text}')
            
            # 提取图片
            images = page.get_images()
            for img_num, img in enumerate(images):
                try:
                    xref = img[0]
                    base_img = doc.extract_image(xref)
                    img_bytes = base_img['image']
                    img_ext = base_img['ext']
                    img_filename = f'page_{page_num + 1}_img_{img_num + 1}.{img_ext}'
                    img_path = os.path.join(img_dir, img_filename)
                    
                    with open(img_path, 'wb') as img_file:
                        img_file.write(img_bytes)
                    
                    # 在markdown中添加图片引用
                    md_file.write(f'\n\n![Image {img_num + 1} from page {page_num + 1}](images/{img_filename})\n')
                except Exception as e:
                    print(f'Error extracting image: {e}')

    doc.close()
    print(f'转换完成！输出文件保存在：{output_dir}')

# 转换PDF
pdf_path = './deepseek-newsletter/DeepSeek 极简入门与应用.pdf'
output_dir = './deepseek-newsletter/DeepSeek-极简入门与应用-converted'
convert_pdf_to_markdown(pdf_path, output_dir) 