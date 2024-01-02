package com.example.entity.mission;

public class Mission {
    private int id;
    private String title;
    private String description;
    private String urgency;
    private String importance;

    public Mission(int id, String title, String description, String urgency, String importance) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.urgency = urgency;
        this.importance = importance;
    }

    // getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getUrgency() {
        return urgency;
    }

    public void setUrgency(String urgency) {
        this.urgency = urgency;
    }

    public String getImportance() {
        return importance;
    }

    public void setImportance(String importance) {
        this.importance = importance;
    }
}
