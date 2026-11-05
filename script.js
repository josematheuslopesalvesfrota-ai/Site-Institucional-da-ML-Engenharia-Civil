// TROQUE pelo número do WhatsApp com DDI e DDD, sem espaços ou símbolos.
// Exemplo: 5511999999999
const whatsappNumber = "5585999200785";
const defaultMessage = "Olá! Encontrei seu site e gostaria de solicitar um orçamento.";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const service = link.dataset.service;
  const message = service
    ? `Olá! Encontrei seu site e gostaria de solicitar um orçamento para: ${service}.`
    : defaultMessage;
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener";
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav nav");
menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});
menu.querySelectorAll("a").forEach((item) => item.addEventListener("click", () => menu.classList.remove("open")));
