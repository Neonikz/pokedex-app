export const hexadecimalToRGBA = (hex: string, opacity: number): string => {
    // Eliminar el carácter '#' del valor hexadecimal
    hex = hex.replace('#', '');

    // Verificar si el valor hexadecimal es de 3 o 6 dígitos y convertirlo a 6 dígitos
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    // Convertir los valores de los canales de color a decimales
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Crear el valor rgba con la opacidad especificada
    const rgba = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    return rgba;
};