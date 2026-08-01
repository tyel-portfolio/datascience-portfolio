async function loadComponents() {
  const componentElements = document.querySelectorAll("[data-component]");

  for (const element of componentElements) {
    const filePath = element.dataset.component;

    try {
      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error(`Could not load ${filePath}`);
      }

      element.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
      element.innerHTML = "<p>Component could not be loaded.</p>";
    }
  }
}

document.addEventListener("DOMContentLoaded", loadComponents);
