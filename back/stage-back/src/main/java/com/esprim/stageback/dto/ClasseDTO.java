package com.esprim.stageback.dto;

public class ClasseDTO extends AbstractDTO<Long> {
     private String filliers;
    private String niveauEtude;

    public ClasseDTO() {
    }



    public void setFilliers(String filliers) {
        this.filliers = filliers;
    }

    public String getFilliers() {
        return this.filliers;
    }

    public void setNiveauEtude(String niveauEtude) {
        this.niveauEtude = niveauEtude;
    }

    public String getNiveauEtude() {
        return this.niveauEtude;
    }
}