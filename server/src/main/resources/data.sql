INSERT INTO habilidades (nombre)
SELECT 'Adobe Photoshop' WHERE NOT EXISTS (SELECT 1 FROM habilidades WHERE nombre = 'Adobe Photoshop');
INSERT INTO habilidades (nombre)
SELECT 'Adobe Illustrator' WHERE NOT EXISTS (SELECT 1 FROM habilidades WHERE nombre = 'Adobe Illustrator');
INSERT INTO habilidades (nombre)
SELECT 'Figma' WHERE NOT EXISTS (SELECT 1 FROM habilidades WHERE nombre = 'Figma');
INSERT INTO habilidades (nombre)
SELECT 'Sketch' WHERE NOT EXISTS (SELECT 1 FROM habilidades WHERE nombre = 'Sketch');
INSERT INTO habilidades (nombre)
SELECT 'Prototyping' WHERE NOT EXISTS (SELECT 1 FROM habilidades WHERE nombre = 'Prototyping');
INSERT INTO habilidades (nombre)
SELECT 'Wireframing' WHERE NOT EXISTS (SELECT 1 FROM habilidades WHERE nombre = 'Wireframing');
INSERT INTO habilidades (nombre)
SELECT 'Animacion 3D' WHERE NOT EXISTS (SELECT 1 FROM habilidades WHERE nombre = 'Animacion 3D');
INSERT INTO habilidades (nombre)
SELECT 'Video Editing' WHERE NOT EXISTS (SELECT 1 FROM habilidades WHERE nombre = 'Video Editing');

INSERT INTO Categorias (nombre)
SELECT 'Diseno Grafico' WHERE NOT EXISTS (SELECT 1 FROM Categorias WHERE nombre = 'Diseno Grafico');

INSERT INTO Categorias (nombre)
SELECT 'Diseno de Interfaces' WHERE NOT EXISTS (SELECT 1 FROM Categorias WHERE nombre = 'Diseno de Interfaces');

INSERT INTO Categorias (nombre)
SELECT 'Animacion y Multimedia' WHERE NOT EXISTS (SELECT 1 FROM Categorias WHERE nombre = 'Animacion y Multimedia');
