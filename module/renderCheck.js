// module/categoryUtils.js

export function renderCategoryCheckboxes(categories, containerSelector) {
    const checkboxContainer = document.querySelector(containerSelector);
    checkboxContainer.innerHTML = categories.map((category, index) => `
        <div class="form-check me-3 mb-2">
            <input class="form-check-input" type="checkbox" value="${category}" id="flexCheckDefault${index}">
            <label class="form-check-label text-sm" for="flexCheckDefault${index}">
                ${category}
            </label>
        </div>
    `).join('');
}
