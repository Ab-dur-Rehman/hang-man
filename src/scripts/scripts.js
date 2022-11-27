//import React from 'react';
//import ReactDOM from 'react-dom';


// import React from 'react';
import $ from 'jquery';

// const scripts = () => {
//     return (
//         <div>
//         { 
            //<script>
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
                        let s2_width = $('.hm_wrapper').width();
                        $('.section_2_wrapper').height(s2_height);
                        console.log('width' + s2_width);
                        let hMan_height = 225;
                        let hMan_width = 125;
                        let hMan_margin_top = (s2_height - hMan_height) / 2;
                        let hMan_margin_left = (s2_width - hMan_width) / 2;
                        console.log(hMan_margin_left);
                        $('.hm_wrapper').css('margin-top', hMan_margin_top);
                        $('.hm_wrapper').css('margin-left', hMan_margin_left);
                    });
                    $(window).resize();
                });
           // </script>
// }
//         </div>
//     );
// }

// export default scripts;