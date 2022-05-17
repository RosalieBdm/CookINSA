<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NuxtLink class="navbar-brand" to="/">CookINSA</NuxtLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <NuxtLink class="nav-link" to="/">🏠 Home <span class="sr-only">(current)</span></NuxtLink>
                </li>

                 <li class="nav-item">
                    <NuxtLink class="nav-link" to="/publishing">➕ Publish</NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/my_items">🧺 Saved Items</NuxtLink>
                </li>
               
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider">

                            </div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li> -->
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/profile">😎 Profile</NuxtLink>
                </li>

                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/settings">⚙️ Settings</NuxtLink>
                </li>

            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="🔎 Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .image {
        width: 5rem;
        height: 5rem;
        /* margin-top: 2rem; */
        /* vertical-align: middle;
        align-items: center; */
        border-radius: 1rem;
    }
    .padding {
        padding: 1.5rem;
        background-color: black
    }
    .nav-left {
        margin-left: auto;
    }
</style>