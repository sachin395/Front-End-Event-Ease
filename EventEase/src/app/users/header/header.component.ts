import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit(): void {

    const searchBox = document.querySelector(".search-box") as HTMLElement;

    const searchIcon = document.querySelector(".search-icon") as HTMLElement;

    const cancelIcon = document.querySelector(".cancel-icon") as HTMLElement;

    const searchInput = document.querySelector(".search-input") as HTMLInputElement;

    const searchData = document.querySelector(".search-data") as HTMLElement;

 

    searchIcon.onclick = () => {

      searchBox.classList.add("active");

      searchIcon.classList.add("active");

      searchInput.classList.add("active");

      cancelIcon.classList.add("active");

      searchInput.focus();

      if (searchInput.value !== "") {

        const values = searchInput.value;

        searchData.classList.remove("active");

        searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";

      } else {

        searchData.textContent = "";

      }

    };

 

    cancelIcon.onclick = () => {

      searchBox.classList.remove("active");

      searchIcon.classList.remove("active");

      searchInput.classList.remove("active");

      cancelIcon.classList.remove("active");

      searchData.classList.toggle("active");

      searchInput.value = "";

    };

  }
}
