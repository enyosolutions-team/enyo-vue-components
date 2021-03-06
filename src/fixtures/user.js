module.exports = {
    $id: 'http://enyosolutions.com/schemas/user.json',
    type: 'object',
    properties: {
      _id: {
        $id: '_id',
        // type: ['object', 'string'],
        type: 'number',
        title: 'numéro utlisateur',
        description: 'Identifiant utilisateur',
      },
      firstname: {
        type: 'string',
        title: 'prénom',
        description: 'prénom utilisateur',
        field: {
          required: true,
        },
      },
      lastname: {
        type: 'string',
        title: 'nom',
        description: 'nom utilisateur',
        field: {
          required: true,
        },
      },
      username: {
        type: 'string',
        title: "Nom d'utilisateur",
        description: "Nom d'utilisateur",
        field: {
          hidden: true,
        },
      },
      email: {
        type: 'string',
        format: 'email',
        required: true,
        field: {
          required: false,
          inputType: 'email',
        },
      },
      phonenumber: {
        type: 'string',
        title: 'téléphone',
      },
      providerCode: {
        type: 'string',
        default: '',
        relation: '/provider',
        foreignKey: 'code',
        field: {
          type: 'EnyoSelect',
          fieldOptions: {
            enum: 'providers',
            trackBy: 'code',
            label: 'label',
          },
        },
        column: {
          trackBy: 'code',
          label: 'label',
          type: 'relation',
        },
      },
      roles: {
        type: 'array',
        default: ['USER'],
        items: {
          type: 'string',
          enum: ['USER', 'MANAGER', 'ADMIN'],
        },
        field: {
          type: 'vueMultiSelect',
          fieldOptions: {
            multiple: true,
            enum: ['USER', 'MANAGER', 'ADMIN'],
          },
        },
      },
      password: {
        type: 'string',
        title: 'Mot de passe',
        field: {
          type: 'input',
          inputType: 'password',
        },
        column: {
          hidden: true,
        },
      },
      confirmPassword: {
        type: 'string',
        title: 'Confirmez le mot de passe',
        field: {
          type: 'input',
          inputType: 'password',
        },
        column: {
          hidden: true,
        },
      },
      society: {
        type: 'string',
        title: 'société',
      },
      street: {
        type: 'string',
        title: 'nom de voie',
      },
      postalcode: {
        type: 'string',
        title: 'code postal',
      },
      city: {
        type: 'string',
        title: 'ville',
      },
      country: {
        type: 'string',
        title: 'pays',
      },
      birthdate: {
        type: ['string', 'object'],
        format: 'date',
        allowNull: true,
      },
      isActive: {
        type: 'boolean',
        default: true,
      },
      deactivated: {
        type: 'boolean',
        default: false,
      },
      isPhonenumberVerified: {
        type: 'boolean',
        default: false,
      },
      termsAccepted: {
        type: 'boolean',
        default: false,
      },
      resetToken: {
        type: 'string',
        hidden: true,
        field: {
          hidden: true,
        },
        column: {
          hidden: true,
        },
      },
      uberToken: {
        type: 'string',
        hidden: true,
        field: {
          hidden: true,
        },
        column: {
          hidden: true,
        },
      },
      googleId: {
        type: 'string',
      },
      googleTokens: {
        type: 'string',
        default: '',
      },
      facebookId: {
        type: 'string',
      },
      oneSignalPlayerId: {
        type: 'string',
      },
      mangoPayUserId: {
        type: 'string',
      },
      cagnotteId: {
        type: 'number',
      },
      currentRide: {
        type: 'number',
        field: { type: 'label' },
      },
      logins: {
        type: 'number',
        field: { type: 'label' },
        readonly: true,
      },
      visits: {
        type: 'number',
        field: { type: 'label' },
        readonly: true,
      },
      lastConnexionOn: {
        type: ['string', 'object'],
        format: 'date-time',
        readonly: true,
        field: { type: 'label' },
        column: { type: 'datetime' },
      },
      createdOn: {
        type: ['string', 'object'],
        format: 'date-time',
        readonly: true,
        field: { type: 'label' },
        column: { type: 'datetime' },
      },
      lastModifiedOn: {
        type: ['string', 'object'],
        format: 'date-time',
        readonly: true,
        field: { type: 'label' },
        column: { type: 'datetime' },
      },
      passwordResetRequestedOn: {
        type: ['string', 'object'],
        format: 'date-time',
        readonly: true,
        field: { type: 'label' },
        column: { type: 'datetime' },
      },
      encryptedPassword: {
        type: 'string',
        hidden: true,
        field: {
          hidden: true,
        },
        column: {
          hidden: true,
        },
      },
    },
    required: ['email'],
};
