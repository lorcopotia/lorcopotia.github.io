# Ansible en nuestro día-a-día

## Automatizando la configuración de un servidor web con Ansible: Un ejemplo práctico

En el mundo actual de desarrollo y operaciones, la automatización es clave para lograr eficiencia y escalabilidad. Ansible se ha convertido en una herramienta fundamental para los equipos de DevOps, permitiéndoles automatizar la configuración y gestión de su infraestructura de manera sencilla y efectiva. 

Este artículo presenta un ejemplo práctico y útil que demuestra cómo usar un playbook de Ansible para configurar un servidor web Apache en un sistema Ubuntu.

**El playbook:**

```yaml
---
- hosts: webservers
  become: yes

  vars:
    document_root: /var/www/html
    apache_package: apache2

  tasks:
  - name: Instalar Apache
    apt: 
      name: "{{ apache_package }}"
      state: present

  - name: Crear el directorio raíz del documento
    file:
      path: "{{ document_root }}"
      state: directory
      owner: www-data
      group: www-data
      mode: 0755

  - name: Copiar archivo index.html
    copy:
      src: index.html
      dest: "{{ document_root }}/index.html"
      owner: www-data
      group: www-data
      mode: 0644

  - name: Habilitar el sitio web predeterminado
    command: a2ensite default

  - name: Reiniciar Apache
    service:
      name: "{{ apache_package }}"
      state: restarted
```

**Explicación paso a paso:**

1. **Definición de hosts:** La primera línea define el grupo de hosts (`webservers`) donde se ejecutará el playbook.  **Es importante destacar que debes configurar tu inventario de Ansible para que incluya los servidores que pertenecen a este grupo.**
2. **Privilegios de root:** `become: yes` indica que las tareas se ejecutarán con privilegios de root.
3. **Variables:** La sección `vars` define las variables que se utilizarán en el playbook, como la ruta del directorio raíz del documento (`document_root`) y el nombre del paquete de Apache (`apache_package`).
4. **Tareas:** La sección `tasks` contiene la lista de tareas que se ejecutarán en los hosts especificados.
    * **Instalar Apache:** Esta tarea utiliza el módulo `apt` para instalar el paquete de Apache.
    * **Crear directorio raíz:** Esta tarea utiliza el módulo `file` para crear el directorio raíz del documento si no existe.
    * **Copiar archivo index.html:** Esta tarea utiliza el módulo `copy` para copiar un archivo `index.html` desde el directorio local al directorio raíz del documento en el servidor.
    * **Habilitar sitio web:** Esta tarea utiliza el comando `a2ensite` para habilitar el sitio web predeterminado en Apache.
    * **Reiniciar Apache:** Esta tarea utiliza el módulo `service` para reiniciar el servicio Apache, asegurando que los cambios se apliquen.

**Beneficios de usar Ansible:**

* **Idempotencia:**  Ansible garantiza que el servidor esté en el estado deseado, incluso si el playbook se ejecuta varias veces. Si Apache ya está instalado, Ansible no intentará reinstalarlo.
* **Simplicidad:**  La sintaxis YAML de Ansible es fácil de leer y entender, incluso para personas sin experiencia previa en programación.
* **Reutilización:**  Los playbooks de Ansible se pueden reutilizar para configurar múltiples servidores con diferentes configuraciones, lo que reduce la duplicación de esfuerzos y la posibilidad de errores.

**Conclusión:**

Este ejemplo práctico ilustra cómo Ansible puede simplificar significativamente la configuración de un servidor web. Con solo unas pocas líneas de código YAML, puedes automatizar todo el proceso, desde la instalación de software hasta la configuración de archivos y servicios. Ansible no solo ahorra tiempo y reduce errores, sino que también hace que la gestión de la infraestructura sea más eficiente, escalable y repetible.
