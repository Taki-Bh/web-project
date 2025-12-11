import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Offer {
  id: string;
  name: string;
  price: string;
  features: string[];
  isFeatured: boolean;
  badge?: string;
  color: string;
}

@Component({
  selector: 'app-offers',
  imports: [CommonModule, FormsModule],
  templateUrl: './offers.html',
  styleUrl: './offers.css',
})
export class Offers {
  selectedOffer: Offer | null = null;
  showCheckoutModal: boolean = false;
  
  // Formulaire de checkout
  checkoutForm = {
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: 'card'
  };

  offers: Offer[] = [
    {
      id: 'silver',
      name: 'Silver',
      price: '50 DT',
      features: [
        'Cours enregistrés',
        'Fichiers PDF téléchargeables',
        'Accès 24/7 à la plateforme',
        'Support par email'
      ],
      isFeatured: false,
      color: '#6c757d'
    },
    {
      id: 'gold',
      name: 'Gold',
      price: '70 DT',
      features: [
        'Cours enregistrés',
        'Fichiers PDF téléchargeables',
        '2 séances live par semaine',
        'Accès prioritaire aux nouveaux cours',
        'Support par email et chat'
      ],
      isFeatured: false,
      color: '#ffc107'
    },
    {
      id: 'premium',
      name: 'Melouel lel lekhr',
      price: 'Sur mesure',
      features: [
        'Tous les cours enregistrés',
        'Tous les fichiers PDF',
        'Toutes les séances live illimitées',
        'Suivi personnel personnalisé',
        'Sessions privées avec professeurs',
        'Rapports de progression mensuels',
        'Support prioritaire 24/7'
      ],
      isFeatured: true,
      badge: 'Le plus populaire',
      color: '#007bff'
    }
  ];

  selectOffer(offer: Offer): void {
    this.selectedOffer = offer;
    this.showCheckoutModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeCheckout(): void {
    this.showCheckoutModal = false;
    this.selectedOffer = null;
    document.body.style.overflow = 'auto';
  }

  submitCheckout(): void {
    if (this.checkoutForm.fullName && this.checkoutForm.email && this.checkoutForm.phone) {
      alert(`Merci ${this.checkoutForm.fullName} ! Votre demande pour l'offre ${this.selectedOffer?.name} a été envoyée. Nous vous contactons bientôt !`);
      this.closeCheckout();
      this.resetForm();
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

  resetForm(): void {
    this.checkoutForm = {
      fullName: '',
      email: '',
      phone: '',
      paymentMethod: 'card'
    };
  }
}