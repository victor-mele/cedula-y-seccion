import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Información Personal</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center; padding: 50px; }
            .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); max-width: 400px; margin: auto; }
            h1 { color: #333; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Victor Meléndez</h1>
            <p><strong>CI:</strong> 31536815</p>
            <p><strong>Sección:</strong> 3</p>
            <p><strong>Materia:</strong> Programación 2</p>
        </div>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});