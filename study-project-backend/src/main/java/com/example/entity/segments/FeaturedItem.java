package com.example.entity.segments;

public class FeaturedItem {
    private String title;
    private String description;
    private String image;
    private String alt;
    public FeaturedItem() {
    }


    public FeaturedItem(String title, String description, String image, String alt) {
        this.title=title;
        this.description=description;
        this.image=image;
        this.alt=alt;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getAlt() {
        return alt;
    }

    public void setAlt(String alt) {
        this.alt = alt;
    }



    // 省略构造函数、getter和setter
}
