$(document).ready(function () {
    $(document).on('dragstart', '.art', function (event) {
        event.originalEvent.dataTransfer.setData('text/plain', event.target.outerHTML);
    });
    $('#chart-wrapper').on('dragover', function (event) {
        event.preventDefault(); // Necessary to allow dropping.
    });

    $('#chart-wrapper').on('drop', function (event) {
        event.preventDefault();
        var data = event.originalEvent.dataTransfer.getData('text/plain');

        $('#chart').append(data); // Append the image to the chart.
    });
    // Detect drag start on images inside #chart
    $('#chart').on('dragstart', '.art', function (event) {
        event.originalEvent.dataTransfer.setData('text/plain', event.target.id);
    });
    $('#chart').on('dragover', '.art', function (event) {
        event.preventDefault(); // Necessary to allow dropping.
    });

    // Handle drop on #chart-wrapper
    $('#page').on('drop', function (event) {
        event.preventDefault();
        var droppedElementId = event.originalEvent.dataTransfer.getData('text/plain');
        var $droppedElement = $('#' + droppedElementId);

        // Check if drop occurs in the margin area of #chart-wrapper
        if (!$droppedElement.closest('#chart').length) {
            $droppedElement.remove(); // Remove the image
        }
    });
    // 다운로드 관련 코드
    // function download(){
    //     domtoimage.toBlob(document.getElementById('my-node'))
    //         .then(function (blob) {
    //             window.saveAs(blob, 'my-node.png');
    //         });
    // }
    //
    // document.getElementById('download-png').addEventListener("click", download);



    $("#new-search-container").submit(function (event) {
        event.preventDefault();

        var searchTerm = $("#search-bar").val();
        $("#search-bar").val('');
        $("#grow").empty();
        var selectedType = $("#select-type").val(); // select 태그의 현재 값을 가져옵니다.
        var url;
        if (selectedType === "music") {
            url = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchTerm}&api_key=6c67501b10ead90eecb6dd97bb2a47f3&format=json`;
            $.ajax({
                url: url,
                type: 'GET',
                success: function (response) {
                    response.results.albummatches.album.forEach(function (album) {
                        if (album.image[3] && album.image[3]['#text']) {
                            var albumHtml = '<div class="art" draggable="true">' +
                                '<div class="inner" style="background-image: url(' + album.image[3]['#text'] + '); width: 130px; height: 130px;"></div>' +
                                '</div>';
                            $("#grow").append(albumHtml);
                            console.log("음악 완료")
                        }

                    });
                },
                error: function (error) {
                    console.log("데이터 가져오기 오류: ", error);
                }
            });
        } else if (selectedType === "games") {
            url = `https://api.igdb.com/v4/games/`; // movies가 선택되었을 때의 URL을 설정합니다.
            $.ajax({
                url: url,
                type: 'POST',
                headers: {
                    'Client-ID': '2t4cj8m9spn9mo8htg8g0ldhmahskt',
                    'Authorization': 'Bearer w42hfhg5m8uvs3tm8ugl4y4js1lrhz',
                },
                data: "fields screenshots.*; where id = 1942;", // Query string


                success: function (response) {
                    response.forEach(game => {
                        if (game.screenshots && game.screenshots.length > 0) {
                            game.screenshots.forEach(screenshot => {
                                var imageUrl = "https:" + screenshot.url; // Adding "https:" because the URL in the response is protocol-relative
                                var albumHtml = '<div class="art" draggable="true">' +
                                    '<div class="inner" style="background-image: imageUrl; width: 130px; height: 130px;"></div>' +
                                    '</div>';
                                $("#grow").append(albumHtml);
                                console.log("게임 완료")
                            });
                        }
                    });

                },
                error: function (error) {
                    console.log("데이터 가져오기 오류: ", error);
                }
            });
        } else if (selectedType === "movies") {
            url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=true&language=kr-KR&page=1`; // movies가 선택되었을 때의 URL을 설정합니다.
            $.ajax({
                url: url,
                type: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmVhN2ZiNWY5OWRmNWQxOTk3ZmQwMzRkMjA2NWJkOCIsInN1YiI6IjY1OTE3ZjNmZjVmMWM1NzgzMjAwOTIyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VtfgyDW4oQZnjcsc9GFB0E4S-9VdmvKfINNMI2RBoIs',
                },
                success: function (response) {
                    response.results.forEach(movie => {
                        if (movie.poster_path && movie.poster_path.length > 0) {
                            var imageUrl = "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                            var albumHtml = '<div class="art" draggable="true">' +
                                '<div class="inner" style="background-image: url(' + imageUrl + '); width: 130px; height: 130px;"></div>' +
                                '</div>';
                            $("#grow").append(albumHtml);
                            console.log("영화 완료")
                        }

                    })

                },
                error: function (error) {
                    console.log("데이터 가져오기 오류: ", error);
                }
            });

        } else if (selectedType === "dramas") {
            url = `https://api.themoviedb.org/3/search/tv?query=${searchTerm}&include_adult=true&language=kr-KR&page=1`;
            $.ajax({
                url: url,
                type: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmVhN2ZiNWY5OWRmNWQxOTk3ZmQwMzRkMjA2NWJkOCIsInN1YiI6IjY1OTE3ZjNmZjVmMWM1NzgzMjAwOTIyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VtfgyDW4oQZnjcsc9GFB0E4S-9VdmvKfINNMI2RBoIs',
                },
                success: function (response) {
                    response.results.forEach(movie => {
                        if (movie.poster_path && movie.poster_path.length > 0) {
                            var imageUrl = "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                            var albumHtml = '<div class="art" draggable="true">' +
                                '<div class="inner" style="background-image: url(' + imageUrl + '); width: 130px; height: 130px;"></div>' +
                                '</div>';
                            $("#grow").append(albumHtml);
                            console.log("드라마 완료")
                        }

                    })

                },
                error: function (error) {
                    console.log("데이터 가져오기 오류: ", error);
                }
            });

        } else if (selectedType === "person") {
            url = `https://api.themoviedb.org/3/search/person?query=${searchTerm}&include_adult=true&language=kr-KR&page=1`;
            $.ajax({
                url: url,
                type: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmVhN2ZiNWY5OWRmNWQxOTk3ZmQwMzRkMjA2NWJkOCIsInN1YiI6IjY1OTE3ZjNmZjVmMWM1NzgzMjAwOTIyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VtfgyDW4oQZnjcsc9GFB0E4S-9VdmvKfINNMI2RBoIs',
                },
                success: function (response) {
                    response.results.forEach(person => {
                        if (person.profile_path && person.profile_path.length > 0) {
                            var imageUrl = "https://image.tmdb.org/t/p/w500/" + person.profile_path
                            var albumHtml = '<div class="art" draggable="true">' +
                                '<div class="inner" style="background-image: url(' + imageUrl + '); width: 130px; height: 130px;"></div>' +
                                '</div>';
                            $("#grow").append(albumHtml);
                            console.log("연예인 완료")
                        }

                    })

                },
                error: function (error) {
                    console.log("데이터 가져오기 오류: ", error);
                }
            });

        } else if (selectedType === "webtoon") {
            url = `https://korea-webtoon-api.herokuapp.com/search?keyword=${searchTerm}`
            $.ajax({
                url: url,
                type: 'GET',
                success: function (response) {
                    response.webtoons.forEach(webtoon => {
                            var imageUrl = webtoon.img
                            var albumHtml = '<div class="art" draggable="true">' +
                                '<div class="inner" style="background-image: url(' + imageUrl + '); width: 130px; height: 130px;"></div>' +
                                '</div>';
                            $("#grow").append(albumHtml);
                            console.log("웹툰 완료")
                        }
                    )

                },
                error: function (error) {
                    console.log("데이터 가져오기 오류: ", error);
                }
            });
        }

    });
});
