# Protegiendo las credenciales con Ansible Vault

¡Hola de nuevo, amantes de la automatización! ¿Listos para llevar nuestras habilidades con Ansible al siguiente nivel? En esta ocasión, vamos a aprender a crear usuarios en un servidor remoto de forma segura, utilizando Ansible Vault para proteger nuestras preciadas credenciales.

1. ¡Elevando la seguridad! Guardando las credenciales en un archivo con Ansible Vault

Para empezar, necesitamos un lugar seguro donde guardar los nombres de usuario y contraseñas que usaremos para crear las cuentas en el servidor remoto. Ansible Vault es la herramienta perfecta para este trabajo.
Ejecuta el siguiente comando en tu terminal para crear un archivo llamado credenciales_usuarios.yml:
ansible-vault create credenciales_usuarios.yml
Ansible te pedirá que introduzcas una contraseña súper secreta. ¡Guárdala bien, es la llave para acceder a nuestra fortaleza digital!
Dentro del archivo credenciales_usuarios.yml, define una lista de usuarios con sus respectivos nombres de usuario y contraseñas:

```yaml
usuarios:
  - nombre: usuario1
    usuario: usuario1
    contrasena: "contrasena_segura_1"
  - nombre: usuario2
    usuario: usuario2
    contrasena: "contrasena_segura_2"
```

Guarda el archivo y Ansible lo encriptará con la contraseña que elegiste. ¡Tus credenciales están a salvo!

2. ¡A la acción! Creando usuarios con un playbook de Ansible
Ahora, vamos a crear un playbook que use las credenciales almacenadas en nuestro archivo credenciales_usuarios.yml para crear las cuentas de usuario en el servidor remoto. Crea un archivo llamado crear_usuarios.yml con el siguiente contenido:

```
- hosts: servidores_remotos
  become: yes

  vars_files:
    - credenciales_usuarios.yml

  tasks:
    - name: Crear usuarios
      ansible.builtin.user:
        name: "{{ item.usuario }}"
        password: "{{ item.contrasena }}"
        state: present
      loop: "{{ usuarios }}"
```

¡Desglosando el playbook!
- hosts: Define el grupo de servidores donde se crearán los usuarios. Puedes usar el nombre del grupo que definiste en tu archivo de inventario.
- become: Le da a Ansible superpoderes para ejecutar tareas como administrador.
- vars_files: Aquí incluimos nuestro archivo encriptado con Ansible Vault.
- tasks: Define las tareas a ejecutar. En este caso, solo tenemos una tarea:
  - Crear usuarios: Usa el módulo user para crear las cuentas de usuario. La opción loop recorre la lista de usuarios definida en credenciales_usuarios.yml.

3. ¡A ejecutar se ha dicho! Poniendo en marcha el playbook

Recuerda que para ejecutar el playbook con la información encriptada, necesitas proporcionar la contraseña de Ansible Vault. Puedes hacerlo al ejecutar el playbook o usando un archivo de contraseña, como te mostramos en el paso 3 del artículo anterior.
Ejecuta el siguiente comando para poner en marcha nuestro plan maestro:

```bash
ansible-playbook -i hosts crear_usuarios.yml --ask-vault-pass
```

Ansible te pedirá la contraseña de credenciales_usuarios.yml y luego creará las cuentas de usuario en el servidor remoto. ¡Misión cumplida! ¡Seguridad y eficiencia en un solo paquete!

Con Ansible Vault y un playbook bien diseñado, podemos automatizar la creación de usuarios de forma segura y eficiente. ¡Anímate a probarlo y sigue explorando las posibilidades de Ansible!

Nota: La información sobre cómo usar Ansible Vault proviene de la documentación oficial de Ansible y no de las fuentes proporcionadas. Puedes encontrar más detalles en la página de la documentación de [Ansible Vault](https://docs.ansible.com/ansible/2.9/user_guide/vault.html).
