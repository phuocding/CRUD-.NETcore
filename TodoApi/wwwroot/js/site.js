﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $(".btnDelete").click(function () {
        var currentBtn = $(this);
        if (confirm("your confirm delete?")) {
            $.ajax({
                url: '/Student/Delete?id=' + currentBtn.attr("id"),
                method: "DELETE",
                success: function () {
                    $(".alert-success").text("Delete success");
                    currentBtn.closest("li").remove();
                },
                error: function () {
                    $(".alert-danger").text("Delete Failed");
                }
            });
        }
    });
});