---
layout: page
title: DiffuseNet
description: Collection of generative models trained from scratch including DDPM, DiT, VAE for learning and research
img: assets/img/mnist.png
importance: 1
category: work
---

I have trained a number of generative models from scratch on PyTorch and trained them on server-grade hardware. In the process, I conducted an exhaustive literature survey of state-of-the-art papers for the related models. All the code is available on [Github](https://github.com/its-nmt05/DiffuseNet). You can also check out the [project report](https://drive.google.com/file/d/1jRF91PUQ4Mh-WL9JIbqucw2O9aVNMUZC/view?usp=sharing).

### Variation Autoencoder (VAE)
Implemented a VAE from scratch inspired by [SD-VAE](https://github.com/CompVis/stable-diffusion). It was trained on both MNIST and Minecraft images. The model uses a convolutional autoencoder with upsampling and downsampling blocks along with residual attention layers. 

Training was performed using `adversarial loss`, `KLD loss` and `LPIPS` loss using a pretrained `vgg16` network.

#### Interpolations

<figure>
    <div class="row">
    <div class="col-sm">
        {% include figure.liquid path="assets/img/minecraft_interpolate.gif" title="Minecraft interpolation" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm">
        {% include figure.liquid path="assets/img/mnist_interpolate.gif" title="MNIST interpolation" class="img-fluid rounded z-depth-1"%}
    </div>
    </div>
    <figcaption class="text-center mb-2">Linear interpolations between two latents</figcaption>
</figure>

#### Reconstructions
The VAE was trained on `256x256` Minecraft images and outputs latents of dim `64x8x8`, with a `48x` compression.
{% include figure.liquid path="assets/img/vae_recon.png" title="VAE reconstruction" class="img-fluid rounded z-depth-1" %}

### Diffusion Transformer (DiT)
Implementation of Diffusion Transformer inspired by the original [DiT paper](https://arxiv.org/abs/2212.09748). The model uses transformer blocks with timesteps conditioned through `adaLN` Tested both small (76 M) and large (608 M) variants on the Minecraft dataset using our pre-trained VAE. All the models were trained on an NVIDIA A100.

<figure>
    <div class="row">
    <div class="col-sm">
        {% include figure.liquid path="assets/img/dit_samples_minecraft.png" title="Minecraft generations" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm">
        {% include figure.liquid path="assets/img/dit_samples_pokemon.png" title="Pokemon generations" class="img-fluid rounded z-depth-1" %}
    </div>
    </div>
    <figcaption class="text-center mb-2">Generated Minecraft (left) and Pokemon (right) images by DiT-large model from noise</figcaption>
</figure>

### DDPM Generations

<figure>
    <div class="row">
    <div class="col-sm">
        {% include figure.liquid path="assets/img/mnist.png" title="MNIST generations" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm">
        {% include figure.liquid path="assets/img/cifar_perceptual.png" title="CIFAR-10 generations" class="img-fluid rounded z-depth-1" %}
    </div>
    </div>
    <figcaption class="text-center mb-2">U-Net generations on MNIST (left) and CIFAR-10 (right)</figcaption>
</figure>

#### Timestep Sampling (T=500)
{% include figure.liquid path="assets/img/sampling.png" title="Timestep sampling" class="img-fluid rounded z-depth-1" %}
