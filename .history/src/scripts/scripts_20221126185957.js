//import React from 'react';
//import ReactDOM from 'react-dom';


import React from 'react';
import $ from 'jquery';

const scripts = () => {
    return (
        <div>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.compatibility.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.compatibility.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
            { 
            <script>
                $(document).ready(function(){
                    let win_height = 0;
                    win_height = $(document).height();
                    let h_height = $("#header").outerHeight();
                    let s1_height = $("#section_1").outerHeight();
                    let s2_height = win_height - (h_height + s1_height);
                    $('.section_2_wrapper').height(s2_height);
                    $(window).resize(function(){
                        win_height = $(document).height();
                        let h_height = $("#header").outerHeight();
                        let s1_height = $("#section_1").outerHeight();
                        let s2_height = win_height - (h_height + s1_height);
                        $('.section_2_wrapper').height(s2_height);
                    });
                    $(window).resize();
                });
            </script>
}
        </div>
    );
}

export default scripts;