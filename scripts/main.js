const contentTarget = document.querySelector("#content")

const renderHTML = () => {
  contentTarget.innerHTML = `
  <input type="text" placeholder="Enter business name..." id="companySearch" />

  <article class="foundBusinesses"></article>

  <article class="businesses">
      <h2>All Businesses</h2>
      ${}
  </article>

  <article class="businesses--manufacturing">
      <h2>Manufacturing Businesses</h2>
      ${}
  </article>

  <article class="businesses--newYork">
      <h2>New York Businesses</h2>
      ${}
  </article>

  <article class="agents">
      <h2>Purchasing Agents</h2>
      ${}
  </article>
  `
}

renderHTML()