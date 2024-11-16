---
layout: page
title: Acerca de mí
permalink: /about/
---

<div class="profile-container">
  <div class="profile-image">
    <img src="/assets/images/picofme.png" alt="Foto de Perfil" />
  </div>
  <div class="profile-description">
    <h1>¡Hola, soy Duanel!</h1>
    <p>Bienvenido a mi sitio web personal. Soy un apasionado de Linux, DevOps, el Anime y de la tecnología en general. Aquí podrás encontrar información sobre mis proyectos, habilidades y mis intereses personales. ¡Gracias por visitar!</p>
  </div>
</div>

<style>
  /* Contenedor principal alineado a la izquierda */
  .profile-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    padding: 20px;
    background-color: #f9f9f9;
    width: 75%;
    margin: 50px auto 0 0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* Imagen de perfil */
  .profile-image {
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
    width: 150px; /* Tamaño fijo que evita la deformación */
    height: 150px; /* Tamaño fijo que mantiene proporciones */
    margin-right: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta la imagen sin deformarla */
    border-radius: 50%; /* Mantiene la forma redondeada de la imagen */
  }

  /* Descripción de perfil */
  .profile-description {
    max-width: 600px;
  }

  .profile-description h1 {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 2em;
    color: #333;
    margin-bottom: 15px;
  }

  .profile-description p {
    font-family: 'Arial', sans-serif;
    font-size: 1.1em;
    color: #666;
    line-height: 1.6;
  }

  /* Responsividad para pantallas pequeñas */
  @media (max-width: 768px) {
    .profile-container {
      flex-direction: column; /* Cambia a columna para pantallas pequeñas */
      align-items: center; /* Centrar el contenido en pantallas pequeñas */
      text-align: center;
      width: 90%; /* Mayor ancho en pantallas pequeñas */
      margin: 30px auto;
    }

    .profile-image {
      margin-right: 0;
      margin-bottom: 20px; /* Espacio entre la imagen y el texto en pantallas pequeñas */
    }

    .profile-description {
      max-width: 100%;
    }
  }
</style>

<br>

# Acerca de IT neighbor

Soy Ingeniero DevOps con más de 20 años de experiencia en la administración de sistemas Linux. Me especializo en la administración de sistemas y la implementación de soluciones escalables en Kubernetes y Openshift, automatizar despliegues en Cloud públicas utilizando Terraform y configurando cientos de servidores con Ansible.

He trabajado tanto en entornos On-Premise como en la nube (AWS, Azure, Google Cloud), y me encanta enfrentar nuevos desafíos tecnológicos. Me considero alguien práctico y siempre dispuesto a aprender lo necesario para que los proyectos salgan adelante. También disfruto mucho colaborando con equipos, compartiendo conocimientos y ayudando a otros a mejorar sus habilidades.

Este blog nació de la necesidad de compartir mis conocimientos y experiencia con los que como yo buscamos nuevas soluciones y motivaciones. Si buscas a alguien con experiencia técnica sólida y un enfoque cercano y eficiente para resolver problemas ¡Hablemos!
