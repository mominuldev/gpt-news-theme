<?php
/**
 * Template part for displaying page content in header.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package mominul
 */

?>
<div id="search-menu-wrapper">	
	<div class="container pr pts-18">
		<span class="close-search"><i class="ri-close-line"></i></span>
<!--		--><?php //get_search_form(); ?>

        <form id="ajax-search-form" action="" method="get">
            <input type="text" id="search-input" name="s" placeholder="Search..." autocomplete="off">

        </form>

        <div id="search-results"></div>
	</div>
</div>