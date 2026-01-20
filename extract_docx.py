
import zipfile
import xml.etree.ElementTree as ET
import sys
import os

docx_path = "public/shared/VR MEDIA VIEWER UsersGuide (EN).docx"

def extract_text(path):
    if not os.path.exists(path):
        print(f"File not found: {path}")
        return

    try:
        with zipfile.ZipFile(path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            
            # Namespaces likely used in the docx
            namespaces = {
                'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
            }
            
            text_parts = []
            for p in tree.findall('.//w:p', namespaces):
                paragraph_text = []
                for node in p.iter():
                    if node.tag == f"{{{namespaces['w']}}}t":
                        if node.text:
                            paragraph_text.append(node.text)
                    elif node.tag == f"{{{namespaces['w']}}}br":
                        paragraph_text.append("\n")
                    elif node.tag == f"{{{namespaces['w']}}}tab":
                        paragraph_text.append("\t")
                        
                if paragraph_text:
                    text_parts.append("".join(paragraph_text))
            
            print("\n".join(text_parts))

    except Exception as e:
        print(f"Error reading docx: {e}")

if __name__ == "__main__":
    # Redirect stdout to a file with utf-8 encoding
    sys.stdout = open("guide_en_utf8.txt", "w", encoding="utf-8")
    extract_text(docx_path)
    sys.stdout.close()
