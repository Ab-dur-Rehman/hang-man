//import React from 'react';
//import ReactDOM from 'react-dom';


import React from 'react';
import $ from 'jquery';

const scripts = () => {
    return (
        <div>
            {/* <script>
                $(document).ready(function(){
                    var win_height = $(document).height();
                    let h_height = $("#header").outerHeight();
                    let s1_height = $("#section_1").outerHeight();
                    let s2_height = win_height - (h_height + s1_height);
                    $('.section_2_wrapper').height(s2_height);
                    $(window).resize(function(){
                        var win_height = $(document).height();
                        let h_height = $("#header").outerHeight();
                        let s1_height = $("#section_1").outerHeight();
                        let s2_height = win_height - (h_height + s1_height);
                        $('.section_2_wrapper').height(s2_height);
                    });
                    $(window).resize();
                });
            </script> */}



        </div>
    );
}

export default scripts;