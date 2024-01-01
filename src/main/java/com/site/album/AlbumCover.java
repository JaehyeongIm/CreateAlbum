package com.site.album;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class AlbumCover {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 200)
    private String subject;

    @Column(length = 500) // 이미지 경로를 저장할 컬럼
    private String imagePath;

    @ManyToMany
    @JoinTable(
            name = "album_cover_tags",
            joinColumns = @JoinColumn(name = "album_cover_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private List<Tag> tags;


    // 이미지가 업로드된 시각을 저장할 수 있는 컬럼
    @Column
    private LocalDateTime uploadedAt;
}
