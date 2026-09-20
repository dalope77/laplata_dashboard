import sqlite3
import json

try:
    conn = sqlite3.connect('src/utils/vmn_ci.gpkg')
    cursor = conn.cursor()
    
    table_name = 'vmn_2024_completo__vnm2104_pdo'
    cursor.execute(f"PRAGMA table_info('{table_name}');")
    columns = cursor.fetchall()
    print("Columns:", [c[1] for c in columns])
    
    cursor.execute(f"SELECT * FROM {table_name} LIMIT 1;")
    row = cursor.fetchone()
    print("First row:", row[1:]) # Skip geometry column usually at index 0 or similar
    
except Exception as e:
    print(e)
